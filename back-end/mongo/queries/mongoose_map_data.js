const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const util = require("util");
const fs = require("fs")

const cmpDB = mongoose.connect(
  "mongodb://localhost:27017/COSE-Preparedness-Map",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const { ObjectId } = require("mongodb");
const { log } = require("console");
const { fstat } = require("fs");

const CoseMaps = mongoose.model("Cose-Maps", {
  map_name: String,
  map_items: [
    {
      item_name: String,
      is_extra_curricular: Boolean,
      item_description: String,
      item_skill: [
        {
          skill_id: ObjectId,
        },
      ],
      item_type: [
        {
          type_id: ObjectId,
        },
      ],
      item_year_semester: [
        {
          year: Number,
          semester: String,
        },
      ],
    },
  ],
});

const CoseSkills = mongoose.model("Cose-Skills", {
  skill_map: String,
  skill_name: String,
  skill_information: String,
});

const CoseTypes = mongoose.model("Cose-Types", {
  type_map: String,
  type_name: String,
  type_information: String,
  type_icon: String,
});

main()


async function main() {
	mapName = "Software Engineering"

	let map = await grabMap(mapName)

	let skills = await grabSkills(mapName)
	// console.log(skills);

	let types = await grabTypes(mapName)
	// console.log(types);

	map = await matchSkillsTypes(map, skills, types)

	let numYears = await grabNumYears(mapName)

	// console.log('Number of Years:')
	// console.log(numYears.length)

	let semesters =  await grabNumSemesters(map, numYears)

	// console.log(`SEMESTERS:`);
	// console.log(semesters)
	// console.log('Semester Array:')
	// console.log(semesters.semesterArr);
	// console.log('Number of Semesters:')
	// console.log(semesters.numSemesters);


	let coreData = await generateCoreData(map, numYears, semesters.semesterArr, skills)


	console.log('Data:');
	console.log(util.inspect({map_data: {total_years: numYears.length, total_semesters: semesters.numSemesters, years: coreData}}, true, null, true));

	// return {map_data: {total_years: numYears, semesters: semesters.numSemesters}}
}

async function matchSkillsTypes (map, skills, types) {
	try {
		for await(const course of map.map_items) {
			// console.log(`\nCourse Name: ${course.item_name}`);
			for await(const skill of course.item_skill) {
				if(skill.skill_id.hasOwnProperty('type_id')) {
					// console.log(`\tSkill ID: ${skill.skill_id['$oid']}`)
					// console.log(`\tType ID: ${skill.skill_id.type_id}`)

					for (const sk of skills) {
						if (sk._id == skill.skill_id['$oid']) {
							skill.skill_name = sk.skill_name
						}
					}

					for (const ty of types) {
						if (ty._id.equals(skill.skill_id.type_id)) {
							skill.skill_id.type_name = ty.type_name
							skill.skill_id.type_icon = ty.type_icon
						}
					}
				}	else {
					// console.log(`\tSkill ID: ${skill.skill_id}`)
					for (const sk of skills) {
						if (sk._id.equals(skill.skill_id)) {
							// console.log('Yup-----------------');
							skill.skill_name = sk.skill_name
							// console.log(skill);
						}
					}
				}
			}
		}
		return map
	} catch (err) {
		console.log(`Caught Err in matchSkillsTypes ${err}`);
	}
	
}

async function grabMap(mapName) {
	try {
		let map = await CoseMaps.find({ map_name: mapName }).lean();

		return map[0]
	} catch (err) {
		console.log(`Caught err in grabMap: ${err}`);
	}
}

async function grabSkills(mapName) {
	try {
		return await CoseSkills.find({ skill_map: mapName });
	} catch (err) {
		console.log(`Caught err in grabSkills: ${err}`);
	}
}

async function grabTypes(mapName) {
	try {
		return await CoseTypes.find({ type_map: mapName });
	} catch (err) {
		console.log(`Caught err in grabTypes: ${err}`);
	}
}

async function grabNumYears(mapName) {
	try {
		let numYears = await CoseMaps.find().distinct('map_items.item_year_semester.year', {map_name: mapName});

		return numYears
	} catch (err) {
		console.log(`Caught err in grabNumYears: ${err}`);
	}
}

async function grabNumSemesters(map, numYears) {
	try {
		

		let semesterArr = []

		let numSemesters = 0;
		for await(const year of numYears) {
			let yearKey = `year_${year}`
			let yearSems = []

			for (const course of map.map_items) {
				// console.log(`year: ${year} - course: ${course.item_name} - semester: ${course.item_year_semester[0].semester}`)

				// if (course.item_year_semester[0].year == year) {
				// 	console.log(`year: ${year} - course: ${course.item_name}  - semester: ${course.item_year_semester[0].semester}`)
				// }
				

				if (course.item_year_semester[0].year == year && !yearSems.includes(course.item_year_semester[0].semester)) {
					yearSems.push(course.item_year_semester[0].semester)
					numSemesters++
				}
			}
			// semesterArr.push({[yearKey]: yearSems})
			semesterArr.push({year: year, semesters: yearSems})
		}

		return {numSemesters: numSemesters, semesterArr: semesterArr}
	} catch (err) {
		console.log(`Caught err in grabNumSemesters: ${err}`);
	}
	
}

async function generateCoreData(map, numYears, semesterArr, skills) {
	try {
		let coreData = []
		/*
		{
					"year": 1,
					"semesters": [
						{
							"YearName": "Fall",
							"Skills": [
								{
									"SkillName": "Soft Skills",
									"Courses": [
										{
											"CourseName": "SE 221",
											"Type": {
												"TypeName": "Read Search & Discuss (Exploratory assignment: literature review + oral presentaion + report)",
												"TypeIcon": "Red Circle"
											},
											"is_extra_curricular": false
										}
									]
								}
		*/

		for await(const year of numYears) {
			let semesters = []
			let skArr = []
			
			// console.log(`\n\nYear: ${year}`);
			for (const semester of semesterArr) {
				if (semester.year == year) {
					// console.log(semester);
					for (const sem of semester.semesters) {
						// console.log(`\nSemester: ${sem}`);
						let Skills = []
						// let idk = ''
						for (const skill of skills) {
							
							// console.log('SKILL: ', skill.skill_name);
							let courseArr = []
							
							// 
							// console.log(skill);
							for (const course of map.map_items) {
								if (course.item_year_semester[0].year == year && course.item_year_semester[0].semester == sem) {
									// console.log(util.inspect(course, true, null, true));
									for (const itemskill of course.item_skill) {
										if (itemskill.skill_id.hasOwnProperty('type_id')) {
											// console.log('JJJJJJJJJJJJJJJJJJJJJJJJ');
											// console.log(skill);
											if (itemskill.skill_name == skill.skill_name) {
												// console.log('JJJJJJJJJJJJJJJJJJJJJJJJ');
												// console.log(`\t\tCourse: ${course.item_name} - Year: ${course.item_year_semester[0].year} - Semester: ${sem} - Skill: ${itemskill.skill_name}`);

												courseArr.push({CourseName: course.item_name, Type: {TypeName: itemskill.skill_id.type_name, TypeIcon: itemskill.skill_id.type_icon}, is_extra_curricular: course.is_extra_curricular})
											}
										} else {
											if (itemskill.skill_name == skill.skill_name) {
												courseArr.push({CourseName: course.item_name, is_extra_curricular: course.is_extra_curricular})
											}
										}
									}
									
								}
							}
							// console.log(`Year: ${year} - Semester: ${sem}`);
							// console.log(randomArr);
							// idk = {SkillName: skill.skill_name, Courses: randomArr}
							Skills.push({SkillName: skill.skill_name, Courses: courseArr})
							// semesters[loopCount].push(idk)
						}
					semesters.push({YearName: sem, Skills})
					}
				}
			}
			coreData.push({year: year, semesters: semesters})
		}
		// console.log(skills);
		// console.log(util.inspect(coreData, true, null, true));

		return coreData
	} catch (err) {
		console.log(`Caught err in generateCoreData: ${err}`);
	}
	
}


// async function generateCoreData(map, numYears, semesterArr) {
// 	try {

// 		console.log('semesterArr:');
// 		console.log(semesterArr);

// 		let years = []
// 		for await(const year of numYears) {
// 			let yearObj = {year: year, semesters: []}
// 			let fallCourses = []
// 			let springCourses = []
// 			let summerCourses = []
// 			for (const course of map.map_items) {
// 				if (course.item_year_semester[0].year == year && course.item_year_semester[0].semester == 'Fall') {
// 					if (!yearObj.semesters.includes({"YearName": "Fall"})) {
// 						yearObj.semesters.push({"YearName": "Fall"})
// 					}
// 					fallCourses.push(course)
// 				} else if (course.item_year_semester[0].year == year && course.item_year_semester[0].semester == 'Spring') {
// 					springCourses.push(course)
// 				} else if (course.item_year_semester[0].year == year && course.item_year_semester[0].semester == 'Summer') {
// 					summerCourses.push(course)
// 				}
// 			}

// 			yearObj.semesters.push(fallCourses)
// 			yearObj.semesters.push(springCourses)
// 			yearObj.semesters.push(summerCourses)

// 			// console.log(`After Year ${year}`);
// 			// console.log(util.inspect(yearObj, true, null, true));
// 			years.push(yearObj)
// 		}
// 		fs.writeFileSync('coreData.json', JSON.stringify(years, null, 4))
// 	} catch (err) {
// 		console.log(`Caught err in generateCoreData: ${err}`);
// 	}
	
// }
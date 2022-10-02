export default function test_call({msg}) {
 let tag = []	
	msg.forEach(element => {
		if (element.name=='Thomas'){
		   tag.push(<h3>{element.name}</h3>)
	   } else {
		   tag.push(<h2>{element.title}{element.name}</h2>)
	   }
	   
	   });
    
	return (
	<div>
     <h1>Test</h1>
	{tag}


	</div>
  )
}


export const getStaticProps = async() => {
	// const res = await fetch('http://localhost:3080/test_api')

	// const msg = await res.json()

	return {
		props: {
			msg: [
				{ 
				 name: 'Thomas',
				 title: 'Mr.'
				},
				{
				 name: 'Thomas',
				 title: 'Mrs.'
				},
				{
					name: 'Fred2',
					title: 'Dr.'
				}
			 ]
		}
	}
}




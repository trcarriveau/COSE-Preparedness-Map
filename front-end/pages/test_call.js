export default function test_call({msg}) {
  return (
    <div>
     <h1>Test</h1>
		 <h3>{ msg.message }</h3>
    </div>
  )
}


export const getStaticProps = async() => {
	const res = await fetch('http://localhost:3080/test_api')

	const msg = await res.json()

	return {
		props: {
			msg
		}
	}
}
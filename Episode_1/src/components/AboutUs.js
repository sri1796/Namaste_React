import React from 'react'


class AboutUs extends React.Component {
  constructor(props){
    super(props);
    console.log('parent constructor');
  }
  componentDidMount(){
    console.log('parent did mount')
  }
  componentDidUpdate(){
    console.log('component did update');
  }
  componentWillUnmount(){
    console.log('component will unmount');
  }

  render(){
    console.log('parent render');
    return (
    <div>
      <h1>This is about us page</h1>
    </div>
  )
  }
}

// const AboutUs = () => {
//   return (
//     <div>
//       <h1>This is about us page</h1>
//     </div>
//   )
// }

export default AboutUs

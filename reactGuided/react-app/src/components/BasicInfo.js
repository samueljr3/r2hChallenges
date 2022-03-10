import React from 'react'

class BasicInfo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div className='App'>
            {this.props.data.map((person) =>{
                return(
                    <>
                        <p>{person.name}</p>
                        <p>{person.number}</p>
                        <p>Birthday: {person.birthday}</p>
                    </>
            )
            }
        )
    }
        </div>
        )
    }
}

export default BasicInfo
import React, { Fragment } from 'react'

class Sushi extends React.Component {


  render(){

    const { sushi, handleSushiClick, orderIds } = this.props
    const ordered = orderIds.some(id => id ===sushi.id)
    

    return (
      <div className="sushi">
        <div className="plate" 
            onClick={()=>handleSushiClick(sushi.id, sushi.price)}>
          { 
            /* Tell me if this sushi has been eaten! */ 
            ordered ?
              null
            :
              <img alt='no image' src={sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {sushi.name} - ${sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
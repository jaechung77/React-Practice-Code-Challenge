import React, {Fragment} from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {




  render(){
    return (
      <Fragment>
        <div className="belt">
          {this.props.sushis.slice(this.props.startIndex, this.props.startIndex + 4).map(sushi => <Sushi
            key={sushi.id}
            sushi={sushi}
            handleSushiClick={this.props.handleSushiClick} 
            orderIds={this.props.orderIds}
            />
          )}
          <MoreButton handleMoreClick={this.props.handleMoreClick}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer
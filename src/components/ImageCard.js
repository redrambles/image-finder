import React from 'react';

class ImageCard extends React.Component {

  constructor(props){
    super(props);

    this.state = { spans: 0};

    this.imageRef = React.createRef();
  }

  componentDidMount (){
    // Grab the height of images when they load so we can set the span for CSS grid
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight; 
    // 150px was set in the CSS for the grid-auto-rows value
    const spans = Math.ceil(height / 10);
    this.setState({spans});
  }

  render(){
    // Desctructuring for the win
    console.log(this.props.image);
    const {description} = this.props.image;
    // Destructuring again with alias of 'url' for regular value of this.props.image.urls.regular
    const {regular:urlReg, full:urlFull} = this.props.image.urls;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans} `}}>
      <a className="image-link" href={urlFull} target="_blank" rel="noopener noreferrer">
        <img 
          ref={this.imageRef}
          alt={description} 
          src={urlReg}
        />
        </a>
      </div>
    );
  }
}

export default ImageCard;
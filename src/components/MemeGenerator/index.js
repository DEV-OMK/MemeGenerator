import {Component} from 'react'
import {
  HeadingSm,
  HeadingLg,
  Input,
  InputLabel,
  CustomButton,
  ResponsiveContainer,
  MainContainer,
  FormContainer,
  MemeCard,
  MemeText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

let memeDetails = {
  fontSize: '',
  topText: '',
  bottomText: '',
  imageUrl: '',
}

// Write your code here
class MemeGenerator extends Component {
  state = {
    showMeme: false,
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText, fontSize} = this.state
    if (imageUrl !== '' && topText !== '' && bottomText !== '') {
      this.setState({showMeme: true})
      memeDetails = {
        fontSize,
        topText,
        bottomText,
        imageUrl,
      }
    }
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  renderMeme = () => {
    const {topText, bottomText, fontSize, imageUrl} = memeDetails
    return (
      <MemeCard data-testid="meme" url={imageUrl}>
        <MemeText fontSize={fontSize}>{topText}</MemeText>
        <MemeText fontSize={fontSize}>{bottomText}</MemeText>
      </MemeCard>
    )
  }

  render() {
    const {showMeme, imageUrl, topText, bottomText, fontSize} = this.state

    return (
      <MainContainer>
        <ResponsiveContainer>
          <HeadingSm>Meme Generator</HeadingSm>
          {showMeme && this.renderMeme()}
          <FormContainer onSubmit={this.onSubmitForm}>
            <HeadingLg>Meme Generator</HeadingLg>
            <InputLabel htmlFor="imageUrl">Image URL</InputLabel>
            <Input
              type="text"
              value={imageUrl}
              id="imageUrl"
              placeholder="Enter the Image URL"
              onChange={this.onChangeImageUrl}
            />
            <InputLabel htmlFor="topText">Top Text</InputLabel>
            <Input
              type="text"
              value={topText}
              id="topText"
              placeholder="Enter the Top Text"
              onChange={this.onChangeTopText}
            />
            <InputLabel htmlFor="bottomText">Bottom Text</InputLabel>
            <Input
              type="text"
              value={bottomText}
              id="bottomText"
              placeholder="Enter the Bottom Text"
              onChange={this.onChangeBottomText}
            />
            <InputLabel htmlFor="fontSize">Font Size</InputLabel>
            <Input
              value={fontSize}
              id="fontSize"
              onChange={this.onChangeFontSize}
              as="select"
              select
            >
              {fontSizesOptionsList.map(eachFontSize => (
                <option
                  key={eachFontSize.optionId}
                  value={eachFontSize.optionId}
                >
                  {eachFontSize.displayText}
                </option>
              ))}
            </Input>
            <CustomButton type="submit">Generate</CustomButton>
          </FormContainer>
        </ResponsiveContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator

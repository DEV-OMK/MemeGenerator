import styled from 'styled-components'

export const InputLabel = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-size: 14px;
  margin-bottom: 10px;
`

export const Input = styled.input`
  color: ${props => (props.select ? '#1e293b' : '#7e858e')};
  border: 1px solid #d7dfe9;
  background-color: #ffffff;
  padding: 8px;
  border-radius: 8px;
  text-indent: 10px;
  outline: none;
  font-family: 'Open Sans';
  font-size: 14px;
  margin-bottom: 20px;
`

export const CustomButton = styled.button`
  color: #d7dfe9;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  font-size: 12px;
  font-weight: 700;
  border: 1px solid #0b69ff;
  border-radius: 5px;
  padding: 8px;
  padding-inline: 70px;
  cursor: pointer;
  outline: none;
  margin-top: 10px;
  margin-bottom: 20px;
  align-self: flex-start;
`

export const Heading = styled.h1`
  font-family: 'Open Sans';
  font-size: 32px;
  color: #35469c;
  font-weight: 800;
  align-self: center;
`
export const HeadingSm = styled(Heading)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const HeadingLg = styled(Heading)`
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ResponsiveContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 85%;
    flex-direction: row;
    justify-content: flex-start;
  }
`

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px;

  @media screen and (min-width: 768px) {
    width: 48%;
    margin-right: 2%;
    order: 1;
  }
`

export const MemeCard = styled.div`
  width: 100%;
  min-height: 450px;
  padding: 25px;
  background-image: url(${props => props.url});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    order: 2;
    width: 48%;
    margin-left: 2%;
  }
`

export const MemeText = styled.p`
  font-family: 'Open Sans';
  font-size: ${props => props.fontSize}px;
  color: #ffffff;
`


import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://i.pinimg.com/564x/a6/cb/2e/a6cb2e3cc4914b1df8e744dba0442ae0.jpg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 200px;
    color: #9bd4c4; /* Change to the specified color */
    line-height: 1;
    font-family: 'Inter', sans-serif; /* Change to Inter font family */
    font-weight: bold; /* Set the font weight to bold */
    text-shadow: 6px 6px 0 #000000; /* Add black outline with a size of 2px */
`;


const SubHeading = styled(Typography)`
    font-size: 50px;
    color: #FFFFFF; /* Change text color to white */
    font-weight: bold; /* Make the font bold */
    text-shadow: 2px 2px 0 #000000; /* Add black outline with a size of 2px */
`;


const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOG</Heading>
            <SubHeading>Share your thoughts</SubHeading>
        </Image>
    )
}

export default Banner;
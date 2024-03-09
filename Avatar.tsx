import { forwardRef } from 'react';
import { transparentize } from 'polished';
import styled from '@emotion/styled';


const defaultAvatarSizes = {
 small: 32,
 medium: 115,
 large: 150,
};


const AvatarContainer = styled.div`
 border-radius: 50%; 
 // any styles that don't depend can be written up here
 ${({
 size,
 theme: {
   base: { color, spacing },
 },
}) => `
    width: ${defaultAvatarSizes}px;
    height: ${defaultAvatarSizes}px;
    border: ${size === defaultAvatarSizes.small ? '2px': spacing.spacing4} solid ${transparentize(0.4, color.blue25)};
    padding: ${size === defaultAvatarSizes.small ? '2px' : '6px'};
 `}
`;


const StyledAvatarImage = styled.img`
    width: 100%;
    height 100%;
    border-radius: 50%
`;




const Avatar = ({ }, ref) => {
 return (
   <AvatarContainer ref={ref} size={size}>
     <StyledAvatarImage src={src} alt={alt}/>
   </AvatarContainer>
 );
};




export default forwardRef(Avatar);
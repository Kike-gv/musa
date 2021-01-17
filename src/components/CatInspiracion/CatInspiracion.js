import React from 'react';
import styled from 'styled-components';



const InspiracionWrapper = styled.div`
width: 90%;
margin-left: 5%;
`;

const Text = styled.p`
margin-bottom: 3rem;
`;

const Image = styled.img`
object-fit: cover;
width: 100%;
`;


const CatInspiracion = () => {

    const inspiracionObj ={
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada elementum tristique. Donec semper sem imperdiet nulla gravida scelerisque. Cras cursus quis ex a consectetur. Aenean at turpis viverra, congue lorem id, cursus arcu. Nunc vestibulum velit sit amet lectus efficitur tincidunt sit amet in ipsum. Integer ac tincidunt dolor. Vestibulum in euismod justo, a dictum nisl. Sed id diam quis nisi porta sagittis eget eget neque. Sed laoreet non ante at convallis. <br><br> Aenean ultrices turpis eu ante volutpat semper. Vestibulum volutpat ante nunc, a molestie neque suscipit eget. Etiam ultrices neque nec sem mollis fermentum sed ut tellus. Morbi laoreet lectus nibh, in rutrum nulla interdum vel. Aenean egestas erat cursus, vulputate purus sed, interdum enim. Suspendisse efficitur lectus eget purus sodales, nec mattis magna aliquet. Donec erat lacus, sollicitudin et consequat ut, tincidunt et libero. Aliquam justo metus, venenatis a velit sit amet, congue malesuada turpis. Ut a augue nibh. Morbi semper metus ac ipsum pellentesque pretium at et lacus. Mauris massa odio, lobortis ut felis vel, fermentum rhoncus dui. Morbi vel pharetra odio. Praesent auctor consequat mollis. Nam ac congue eros, ac lobortis purus.',
        img: 'https://store-images.s-microsoft.com/image/apps.18327.14204669951057618.66f35ee3-03b9-46a6-b185-b9ce0ffda2f4.2f04a50a-ae96-4ed4-a762-3b3e097eb58f?mode=scale&q=90&h=720&w=1280'
    }


    return (
        <InspiracionWrapper>
            <Text>{inspiracionObj.texto}</Text>
            <Image src={inspiracionObj.img} />
        </InspiracionWrapper>
    )
}

export default CatInspiracion;

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import React from 'react'

function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");


  const fetchDetails = async () => {
      const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
      const detailData = await data.json();
      setDetails(detailData);
  };

  useEffect(() => {
      fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
        </div>
        <Info>
            <Button className={ activeTab === 'instructions' ? 'active' : '' } onClick={() => setActiveTab('instructions')}>Instructions</Button>

            <Button className={ activeTab === 'ingredients' ? 'active' : '' } onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
            { activeTab === 'instructions' && (
                <div>
                    <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                    <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                </div>
            )}
            { activeTab === 'ingredients' && (
                <ul>
                    {details.extendedIngredients.map((ingredient) => <li key={ingredient.id}>{ingredient.original}</li>)}
                </ul>
            )}
            
            
        </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
    margin-top: 4rem;
    margin-bottom: 2rem;
    display: flex;
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: #fff;
    }
    h2{
        margin-bottom: .8rem;
    }
    li{
        font-size: .9rem;
        line-height: 1.2rem;
    }
    ul{
        margin-top: 1rem;
    }
    img{
        height: 20rem;
        width: 22rem;
        object-fit: cover;
        border-radius: 12px;
    }
`;

const Button = styled.button`
    cursor: pointer;
    padding: .5rem 1rem;
    color: #313131;
    background: #fff;
    border: 2px solid black;
    margin-right: 1rem;
    margin-bottom: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 8rem;
`;

export default Recipe
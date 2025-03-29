import { useNavigation } from 'react-router-dom';
import CocktailCard from './CockTailCard'
import React from 'react';
function CockTailList({drinks}) {
    const navigation = useNavigation()
    const isLoaded = navigation.state === 'loading';
    if(isLoaded)return <h4>loading...</h4>
    if(!drinks || drinks.length == 0){
        return <div className="w-full h-full flex justify-center flex-col items-center">
            <span className="mt-10 text-2xl font-semibold block mb-10">
              Nothing Found here!!
            </span>
            <div
              aria-label="Orange and tan hamster running in a metal wheel"
              role="img"
              className="wheel-and-hamster"
            >
              <div className="wheel"></div>
              <div className="hamster">
                <div className="hamster__body">
                  <div className="hamster__head">
                    <div className="hamster__ear"></div>
                    <div className="hamster__eye"></div>
                    <div className="hamster__nose"></div>
                  </div>
                  <div className="hamster__limb hamster__limb--fr"></div>
                  <div className="hamster__limb hamster__limb--fl"></div>
                  <div className="hamster__limb hamster__limb--br"></div>
                  <div className="hamster__limb hamster__limb--bl"></div>
                  <div className="hamster__tail"></div>
                </div>
              </div>
              <div className="spoke"></div>
            </div>
          </div>
    }

    const formattedDrinks = drinks.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =item;
        return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
        };
    });
   return (
      formattedDrinks.map((element)=>{
        
        return <CocktailCard key={element.id} {...element}/>
      })
   );
} 
export default React.memo(CockTailList)
import "./madlibs.styles.css";
const Output = ({fields, id}) => {
  return (
    <>
        {id === 1 && (
          <div>
            {`Sometimes I forget to wash my ${fields[0].value}, and it ends up smelling like ${fields[1].value}, 
            Sometimes I forgot to clean my ${fields[2].value}, too, and then my ${fields[3].value} really smells like a ${fields[4].value},
            after a long day of ${fields[5].value} and farting. Oh man, I should really clean up better! Sometimes I find a ${fields[6].value} 
            in my shoe after playing ${fields[7].value} for too long. And sometimes I find ${fields[8].value} poop under my shoe, 
            and I get ${fields[9].value} smells all over my mom's ${fields[10].value}.`}
          </div>
        )}
         {id === 2 && (
          <div>
            {`Is your ${fields[0].value} full of ${fields[1].value} food? 
            Maybe you should buy the ${fields[2].value} in the cafeteria. The sandwiches are made with ${fields[3].value} ${fields[4].value}.
            Yum. They are wrapped in ${fields[5].value} and are very ${fields[6].value} 
            But if you pack your own lunch, be sure to bring ${fields[7].value} ${fields[8].value}. Everyone loves those.
            You can even share them with  ${fields[9].value}.`}
          </div>
        )}
         {id === 3 && (
          <div>
            {`There is all types of pee. ${fields[0].value} pee,  ${fields[1].value} pee,  
            ${fields[2].value} pee, and even ${fields[3].value} pee. Everyone pees! Some pee is ${fields[4].value}.
            Some pee smells like ${fields[5].value}. Some pee flows like the ${fields[6].value}, while some pee drips like a
            ${fields[7].value}. Some people ${fields[8].value} while they pee. Others simply stand and ${fields[9].value} their
            head while they pee. Just don't be a ${fields[10].value} person who gets pee all over the ${fields[11].value}!
            `}
          </div>
        )}
    </>
  );
};

export default Output;

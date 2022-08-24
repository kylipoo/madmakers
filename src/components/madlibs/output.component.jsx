import "./madlibs.styles.css";
const Output = ({ fields, id }) => {
  return (
    <>
      {id === 1 && (
        <div>
          {`Sometimes I forget to wash my (  ${fields[0].value}  ), and it ends up smelling like (  ${fields[1].value}  ), 
            Sometimes I forgot to clean my (  ${fields[2].value}  ), too, and then my (${fields[3].value}) really smells like a (  ${fields[4].value}  ),
            after a long day of (  ${fields[5].value}  ) and farting. Oh man, I should really clean up better! Sometimes I find a (  ${fields[6].value}  )
            in my shoe after playing (  ${fields[7].value}  ) for too long. And sometimes I find (  ${fields[8].value}  ) poop under my shoe, 
            and I get (  ${fields[9].value}  ) smells all over my mom's (  ${fields[10].value}  ).`}
        </div>
      )}
      {id === 2 && (
        <div>
          {`Is your (  ${fields[0].value} ) full of (  ${fields[1].value} ) food? 
            Maybe you should buy the (  ${fields[2].value}  ) in the cafeteria. The sandwiches are made with (  ${fields[3].value}  ) ( ${fields[4].value}  ).
            Yum. They are wrapped in (  ${fields[5].value}  ) and are very (  ${fields[6].value}   )
            But if you pack your own lunch, be sure to bring (  ${fields[7].value} ) (  ${fields[8].value}  ). Everyone loves those.
            You can even share them with  (  ${fields[9].value}  ).`}
        </div>
      )}
      {id === 3 && (
        <div>
          {`There is all types of pee. (  ${fields[0].value}  ) pee,  (  ${fields[1].value}  ) pee,  
            (  ${fields[2].value}  ) pee, and even (  ${fields[3].value}  ) pee. Everyone pees! Some pee is (  ${fields[4].value}  ).
            Some pee smells like (  ${fields[5].value}  ). Some pee flows like the (  ${fields[6].value}  ), while some pee drips like a
            (  ${fields[7].value}  ). Some people (  ${fields[8].value}  ) while they pee. Others simply stand and (  ${fields[9].value}  ) their
            head while they pee. Just don't be a (  ${fields[10].value}  ) person who gets pee all over the (  ${fields[11].value}  )!
            `}
        </div>
      )}
      {id === 4 && (
        <div>
          {`Today I went to the zoo. I saw a(n) (  ${fields[0].value}  ) (  ${fields[1].value}  ) jumping up and down in its tree.  He  
            (  ${fields[2].value}  ) (  ${fields[3].value}  ) through the large tunnel that led to its (  ${fields[4].value}  )
            (  ${fields[5].value}  ). I got some peanuts and passed them through the cage to a gigantic gray (  ${fields[6].value}  ) towering above my head. 
            Feeding that animal made me hungry. I went to get a (  ${fields[7].value}  ) scoop of ice cream. It filled my stomach. Afterwards I had to (  ${fields[8].value}  ) while they pee. Others simply stand and (  ${fields[9].value}  ) their
            (  ${fields[9].value}  )to catch our bus. When I got home I (  ${fields[10].value}  ) my mom for a (  ${fields[11].value}  ) day at the zoo.
            `}
        </div>
      )}
      {id === 5 && (
        <div>
          {`I, the (  ${fields[0].value}  ) and (  ${fields[1].value}  ) (  ${fields[2].value}  ) has (  ${fields[3].value}  )  (  ${fields[4].value}  )'s sister and plans to steal her
            (  ${fields[5].value}  )(  ${fields[6].value}  )! What are a (  ${fields[7].value}  ) and backpacking (  ${fields[8].value}  )to do? Before you can help (  ${fields[9].value}  ), you'll have to collect
            the (  ${fields[9].value}  )(  ${fields[10].value}  ) and (  ${fields[11].value}  )(  ${fields[12].value}  ) that open up the (  ${fields[12].value}  ) worlds connected to a
            (  ${fields[13].value}  ) lair. There are (  ${fields[14].value}  )(  ${fields[15].value}  ) and (  ${fields[16].value}  )(  ${fields[17].value}  ) in the game, along with hundreds of other goodies for you to find.
            `}
        </div>
      )}
    </>
  );
};

export default Output;

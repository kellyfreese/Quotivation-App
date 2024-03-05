import React from "react";
import FavoriteQuoteCard from "./FavoriteQuoteCard";

const FavoriteQuotes = ({favoriteQuotes, maxFaves, removeFromFavorites }) => {
    //console.log(maxFaves, favoriteQuotes);
    
    const remainingFavoriteAmount = maxFaves - favoriteQuotes.length;
    //console.log(remainingFavoriteAmount);
    return(
        <section className="favorite-quotes">
          <div className="wrapper quotes">
            <h3>Top 3 favorite quotes</h3>
            {favoriteQuotes.length > 0 && (<ul>
                {favoriteQuotes.map((quote) =>(
                <FavoriteQuoteCard 
                    key={quote.id} 
                    quote={quote} 
                    removeFromFavorites={removeFromFavorites}/>))}
                </ul>)}
                { favoriteQuotes.length < maxFaves && (
             <div className="favorite-quotes-description">
                <p>You can add {remainingFavoriteAmount} more {remainingFavoriteAmount ===1 ? "quote": "quotes"} to your top three favorites by selecting from the options below. </p>
                <p>Once you choose, they will appear here.</p>
                </div>  )}
          </div>
        </section>
    )
};


export default FavoriteQuotes;
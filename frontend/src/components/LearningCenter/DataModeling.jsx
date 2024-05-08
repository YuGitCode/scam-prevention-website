import React from "react";
import spam from "../../assets/Spam_wordcloud.jpg";
import nonspam from "../../assets/NonSpam_wordcloud.jpg";
import styles from "../../styles";
import lcStyles from "../../lcStyles";

const DataModeling = () => {
    return(
        <section className={`${styles.padding} mb-20`}>
            <div id="top" className={`my-10`}>
                <h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] ${lcStyles.textColor} xs:leading-[76.8px] leading-[66.8px] w-full flex justify-center `}>Spam Or Ham? Analysing Frequent Words Appeared In Emails</h2>
                <hr className={`border-b-2`}/> {/* Horizontal rule for styling */}
            </div>

            <div id="content" className={`${styles.margin},${styles.padding} `}>
                <div id="spam" className={` w-full grid sm:grid-cols-1 md:grid-cols-2 gap-10`}>
                    <img src={spam} alt="spam wordcloud" className={`${styles.margin} w-full`}/>
                    
                    <div className={`${styles.margin} text-wrap w-full flex flex-col justify-center`}>
                        <h3 className={`text-5xl md:mb-5 text-4xl font-medium`}>Red Word Cloud - Spam Emails</h3>
                        <span className={`text-2xl md:text-xl leading-loose font-light`}>
                            This word cloud represents 
                            common vocabulary found in phishing emails. Words like "free," "prize," 
                            and "claim" are used to attract the recipient's attention and provoke 
                            curiosity or greed, encouraging them to click on links or divulge personal 
                            information. The language is direct and often conveys a sense of urgency with 
                            terms like "urgent," "reply," and "stop," aiming to prompt immediate action. 
                            There is also a frequent mention of money or rewards, such as "cash" and "award," 
                            intended to lure individuals with the promise of gains.
                        </span>
                    </div>
                    
                </div>
                <div id="nonspam" className={`w-full grid sm:grid-cols-1 md:grid-cols-2 gap-10`}>
                    <img src={nonspam} alt="nonspam wordcloud" className={`${styles.margin} w-full`} />
                    
                    <div className={`${styles.margin}flex gap-5 text-warp w-full ml-5`}>
                        <h3 className={`text-5xl md:mb-5 text-4xl font-medium`}>Green Word Cloud - Normal Emails</h3>
                        <span className={`text-2xl md:text-xl sm:text-5 leading-loose font-light`}>
                        This word cloud illustrates the typical language used in everyday emails or messages. 
                        It features conversational words such as "love," "time," and "good," reflecting natural
                         and fluid communication that maintains personal relationships. 
                        The style is more relaxed, with a focus on everyday life details and emotional expression, 
                        using phrases like "thank you," "happy," and "dear." This showcases more genuine and intimate 
                        interpersonal interactions, in contrast to the manipulative nature of spam emails. 
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DataModeling;
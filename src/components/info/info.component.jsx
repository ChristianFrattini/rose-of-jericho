import QuestionToggler from "../question-toggler/question-toggler.component"
import './info.styles.scss'

const Info =()=>{
    return(
        <div>
            <QuestionToggler
                question='Package contents'
                answer={<div>
                    <p> In your parcel you will find:
                            <li>One Rose of Jericho</li>
                            <li>One Terracotta Saucer</li>
                            <li>Decorative white pebbles of various dimensions</li>
                    </p>
                </div>}
            />

            <QuestionToggler
                question='How to cultivate your Rose of Jericho'
                answer={<div>
                    <p> 
                        At first glance, the Rose of Jericho is an apparently lifeless bulb. But over time, with proper watering, it will open completely revealing its branches and will take on a beautiful green color.
                        In order to allow your Rose of Jericho to open, follow these simple steps:
                        <li>Place the white pebbles inside the Terracotta Saucer</li>
                        <li>Add water to the Terracotta Saucer and place your Rose inside. *Make sure the water is in full contact with the plant's roots*</li> 

                        The water's temperature will determine the tone of the green the plant will take on.


                    </p>
                </div>}
            />

            <QuestionToggler
                question='The Rose of Jericho lifecycle'
                answer={<div>
                    <p> 
                        It is extremely important to follow the lifecycle of your Rose. For that, please, read the following information: 
                        <li>Never leave your plant in water for more than 2 days. Once you remove the water the Rose will remain open for up to 2 days and wither afterwards.</li>
                        <li>Once completely withered wait at least 10 days before watering it again.</li>
                        <li>The plant must remain at a temperature of at least 15°, in a bright and ventilated environment.</li>
                    </p>
                </div>}
            />  

            <QuestionToggler
                question='Reproduction'
                answer={<div>
                    <p> 
                    In its natural environment, the life cycle of the Rose of Jericho ends at the beginning of the dry season, when the plant, dehydrating, folds its branches into a compact spheroidal mass. This protects the seeds and prevents premature dispersal. Dormant seeds can remain alive for years.

                    The Jericho rose spontaneously separates its twigs into two or more bulbs, if you want to reproduce then just detach them and reposition them elsewhere thus creating new plants.
                    </p>
                </div>}
            />  
        </div>
    )
}
export default Info
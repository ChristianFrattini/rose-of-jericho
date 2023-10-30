import './description.styles.scss'
import dryRose from '../../assets/images/rose_of_jerico_dry.png' 
import greenRose from '../../assets/images/rose_of_jerico_green.png' 
import Info from '../info/info.component'

const Description =()=>{
    return (
        <div>
            <h3>
                The Rose of Jericho - What is it?
            </h3>
            <p>
                The Selaginella lepidophylla commonly known as <u>'Rose of Jericho'</u> or 'Resurrection Plant' is a species of desert plant in the spikemoss family and <u>it is renowned for its ability to survive almost complete desiccation. </u> It is a plant native to the Chihuahuan Desert in Northern Mexico and capable to survive condition of extreme dryness.
                In the dry season the plant appears as a spherical withered plant. However, in the rainy season the sphere opens up and colours in green. 
            </p>
            <div>
                    <img className='dry_rose' src={dryRose} alt='dryRose' />
                    <img className='green_rose' src={greenRose} alt='greenRose' />
            </div>
            <h3>
                Benefits
            </h3>
            <p>
                Owning a Rose of Jericho can be advantageous in many ways. Firstly, it requires very little water as it is a plant that naturally grows in the desert. That means <u>you can leave your Rose with no water for weeks</u> without worrying of it withering.
                Furthermore, the Rose of Jericho is known to be an extremely good natural remedy against foul odours as <u>it releases a light fragrance that refreshes your room or office and captures foul odours</u>.
            </p>
            <h3>
                The History and Legend of The Rose of Jericho
            </h3>
            <p>
                The Rose of Jericho is believed to be native to the Holy Land. It was brought to Europe by crusaders and pilgrims, accompanied by numerous legends. The most widespread concerns the ability of the Rose of Jericho to give pilgrims thirst-quenching water to support them along the way.

                In Europe it is thought that owning the Rose of Jericho and keeping it in your home is able to attract happiness within the home. It is also a symbol of long life and beauty as well as serenity and resurrection. Furthermore, in some magical practices, the Rose of Jericho is used to create spells and to improve one's prosperity. 
            </p>
            <div>
                <Info/>
            </div>
        </div>
    )
}

export default Description
import './BrowseRange.css';
import dining from '../assets/dining.png';
import living from '../assets/living.png';
import bedroom from '../assets/bedroom.png';


function BrowseRange() {
return (
<section className="range">
<h2>Browse The Range</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>


<div className="range-cards">
<div className="card">
<img src={dining} alt="Dining" />
<h3>Dining</h3>
</div>


<div className="card">
<img src={living} alt="Living" />
<h3>Living</h3>
</div>


<div className="card">
<img src={bedroom} alt="Bedroom" />
<h3>Bedroom</h3>
</div>
</div>
</section>
);
}


export default BrowseRange;
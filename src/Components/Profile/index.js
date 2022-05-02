// import { profileImage } from './images/profile-image.jpg';
import './styles.css';

export function Profile() {
  return (
    <section>
      <div className="section__profile">
        {/**   <img
         class="img--profile"
          src="./images/profile-image.jpg"
          alt="Larry Lobster"
        /> */}
        <figcaption>Larry Lobster</figcaption>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
        omnis adipisci distinctio odit maxime quibusdam asperiores rem corporis
        illo laboriosam possimus quis quos sit, placeat culpa minima dignissimos
        repudiandae hic?
      </p>
    </section>
  );
}

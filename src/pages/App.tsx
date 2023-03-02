import Banner from "../components/Banner/Banner";
import MainContainer from "../components/MainContainer/MainContainer";
import Slider from "../components/Slider/Slider";

function App() {
  return (
    <MainContainer>
      <Slider items={2}>
        <Banner>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus
          eros metus, ut convallis augue rhoncus ut. Curabitur ut eros at nulla
          viverra pharetra. Maecenas id fermentum mauris. Nunc vitae bibendum
          enim. Phasellus eu risus massa. Ut porta iaculis justo, quis iaculis
          lectus vulputate at. Sed ac augue condimentum, dictum orci eu, cursus
          leo. Nam porta commodo felis eget placerat.
        </Banner>
        <Banner>
          {" "}
          Integer feugiat sagittis massa. Curabitur turpis tortor, pretium vitae
          commodo eu, faucibus aliquam tellus. Vestibulum mauris ipsum, semper
          eget auctor vitae, semper a lectus. Etiam molestie venenatis mollis.
          Mauris vel magna id elit ultrices auctor et nec turpis. Maecenas nunc
          metus, fermentum quis dui nec, tempor laoreet est. In scelerisque
          elementum ex. Duis sed vestibulum felis.
        </Banner>
      </Slider>
    </MainContainer>
  );
}

export default App;

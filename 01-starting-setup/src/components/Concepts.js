import Concpet from "./Concept";

const Concepts = (props) => {
  return (
    <div>
      <div>
        <Concpet
          image={props.items[0].image}
          title={props.items[0].title}
          description={props.items[0].description}
        />
        <Concpet
          image={props.items[1].image}
          title={props.items[1].title}
          description={props.items[1].description}
        />
        <Concpet
          image={props.items[2].image}
          title={props.items[2].title}
          description={props.items[2].description}
        />
      </div>
    </div>
  );
};

export default Concepts;

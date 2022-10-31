import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onPokemonSubmit}) {
  const [formData, setFormData] = useState({
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: '',
    })

  function handleFormChange(e){
    const key = e.target.name
    setFormData({
      ...formData,
      [key]: e.target.value
    })
    }

  function handlePokemonSubmit(e){
      e.preventDefault();
      const submittedPokemon = {
        name: formData.name,
        hp: formData.hp,
        sprites: {
          front: formData.frontUrl,
          back: formData.backUrl
        }
      }
      fetch('http://localhost:3001/pokemon', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(submittedPokemon),
      })
      .then(r => r.json())
      .then(pokemon => onPokemonSubmit(pokemon))
    }
  console.log(formData)
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handlePokemonSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
          fluid label="Name" 
          placeholder="Name" 
          name="name" 
          value={formData.name}
          onChange={handleFormChange}
          />
          <Form.Input 
          fluid label="hp" 
          placeholder="hp" 
          name="hp" 
          value={formData.hp}
          onChange={handleFormChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleFormChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleFormChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

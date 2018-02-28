import React, {Component} from 'react';
import Textarea from './Textarea'
import Input from './Input'
import Select from './Select'
import Button from './Button'
import './form.css'

class Form extends Component {

  constructor(props){
    super(props);
    this.handleImage = this.handleImage.bind(this);
  }

  handleImage(e, changeImage) {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      changeImage({
        img: reader.result,
        file: file
      });
    };
    reader.readAsDataURL(file);
  }

  render() {
    const {selectedFilm, onChangeForm, onFormCancel, changeImage, onFormSubmit, onFormSubmitClean} = this.props;
    const rating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return selectedFilm && (
            <div>
              <form action="" onSubmit={(e) => {
                e.preventDefault();
              }}>
                <Input type={"text"}
                       value={selectedFilm.name}
                       property={"name"}
                       onChange={onChangeForm}
                       className=""
                />
                <input type="file"
                       onChange={e => this.handleImage(e, changeImage)}/>
                <Textarea value={selectedFilm.description}
                          property={"description"}
                          onChange={onChangeForm}/>
                <Select rating={rating}
                        property={"rating"}
                        selected={selectedFilm.rating}
                        onChange={onChangeForm}/>
                <div>
                  <Button onClick={onFormCancel}
                          className={'cancel'}
                          buttonText={'Cancel'}/>
                  <Button selectedFilm={selectedFilm}
                          onFormSubmitClean={onFormSubmitClean}
                          onClick={onFormSubmit}
                          className={'submit'}
                          buttonText={'Submit'}/>
                </div>
              </form>
            </div>
        )
  }
};

export default Form;
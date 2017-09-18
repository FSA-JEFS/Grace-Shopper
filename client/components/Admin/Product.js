import React from "react";
import { WithContext as ReactTags } from "react-tag-input";

const isEmptyHelper = (labels, bool) => labels + (!bool ? " is-empty" : "")
const emptyForm = {
    id: '',
    name: '',
    breed: '',
    breeder: '',
    breederEmail: '',
    description: '',
    price: '',
    photos: [],
    photo1: '',
    photo2: '',
    photo3: '',
    photo4: '',
    tags: [],
    inventory: ''
}

export default class ProductTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      suggestions: [
        "Condimentum",
        "Fermentum",
        "Sit",
        "Fusce",
        "Pellsentesque"
      ],
      formFields: {id: ''}
    };
    this.handleTagDelete = this.handleTagDelete.bind(this);
    this.handleTagAddition = this.handleTagAddition.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.setForm = this.setForm.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleTagDelete(i) {
    let tags = this.state.tags;
    tags.splice(i, 1);
    this.setState({ tags: tags });
  }

  handleTagAddition(tag) {
    let tags = this.state.tags;
    tags.push({
      id: tags.length + 1,
      text: tag
    });
    this.setState({ tags: tags });
  }

  setForm(obj) {
    if (obj.photos) obj.photos.forEach((photo, i) => {
                      obj['photo' + (i + 1)] = photo
                    })
    let newtags = []
    if (obj.tags) obj.tags.forEach((tag, i) => newtags.push({id: i, text: tag}))
    this.setState({ formFields: obj, tags: newtags });
  }

  handleFormChange(e, field) {
    this.setState({
      formFields: Object.assign({}, this.state.formFields, {
        [field]: e.target.value
      })
    });
  }

  handleAdd(e) {
    e.preventDefault();
    const photos = [];
    e.target.photo1.value && photos.push(e.target.photo1.value);
    e.target.photo2.value && photos.push(e.target.photo2.value);
    e.target.photo3.value && photos.push(e.target.photo3.value);
    e.target.photo4.value && photos.push(e.target.photo4.value);
    const body = {
      name: e.target.name.value,
      breed: e.target.breed.value,
      breeder: e.target.breeder.value,
      breederEmail: e.target.breederEmail.value,
      description: e.target.description.value,
      price: +e.target.price.value,
      photos: photos,
      tags: this.state.tags.map(t => t.text),
      inventory: +e.target.inventory.value
    };
    this.props.adminAddProduct(body);
    this.setForm(emptyForm)
  }

  handleEdit() {
    const obj = this.state.formFields
    const photos = [];
    obj.photo1.value && photos.push(obj.photo1.value);
    obj.photo2.value && photos.push(obj.photo2.value);
    obj.photo3.value && photos.push(obj.photo3.value);
    obj.photo4.value && photos.push(obj.photo4.value);
    obj.tags = this.state.tags.map(tag => tag.text);
    obj.price = +obj.price;
    obj.inventory = +obj.inventory;
    this.props.adminEditProduct(obj)
    this.setForm(emptyForm)
  }

  render() {
    const { tags, suggestions } = this.state;
    const { products } = this.props;
    return (
      <div className="tab-pane" id={this.props.tabid}>
        <h2 className="title">Send us a message</h2>
        <div className="row">
          <div className="col-md-6" style={{ borderStyle: "solid" }}>
            <h1 className="description">Add/Edit Product</h1>
            <form role="form" id="contact-form" onSubmit={this.handleAdd}>
              <input type="hidden" name="id" value={this.state.formFields.id} />
              <div className={isEmptyHelper("form-group label-floating col-md-6", this.state.formFields.name)}>
                <label className="control-label">Product name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={this.state.formFields.name}
                  onChange={e => this.handleFormChange(e, "name")}
                  required
                />
                <span className="material-input" />
              </div>
              <div className={isEmptyHelper("form-group label-floating col-md-6", this.state.formFields.breed)}>
                <label className="control-label">Product breed</label>
                <input
                  type="text"
                  name="breed"
                  className="form-control"
                  value={this.state.formFields.breed}
                  onChange={e => this.handleFormChange(e, "breed")}
                  required
                />
                <span className="material-input" />
              </div>
              <div className={isEmptyHelper("form-group label-floating col-md-6", this.state.formFields.breeder)}>
                <label className="control-label">Breeder name</label>
                <input
                  type="text"
                  name="breeder"
                  className="form-control"
                  value={this.state.formFields.breeder}
                  onChange={e => this.handleFormChange(e, "breeder")}
                  required
                />
                <span className="material-input" />
              </div>
              <div className={isEmptyHelper("form-group label-floating col-md-6", this.state.formFields.breederEmail)}>
                <label className="control-label">Breeder email</label>
                <input
                  type="email"
                  name="breederEmail"
                  className="form-control"
                  value={this.state.formFields.breederEmail}
                  onChange={e => this.handleFormChange(e, "breederEmail")}
                />
                <span className="material-input" />
              </div>
              <div className={isEmptyHelper("form-group label-floating col-md-6", this.state.formFields.price)}>
                <label className="control-label">Price</label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  value={this.state.formFields.price}
                  onChange={e => this.handleFormChange(e, "price")}
                  required
                />
                <span className="material-input" />
              </div>
              <div className={isEmptyHelper("form-group label-floating col-md-6", this.state.formFields.inventory)}>
                <label className="control-label">Inventory</label>
                <input
                  type="number"
                  name="inventory"
                  min="0"
                  className="form-control"
                  value={this.state.formFields.inventory}
                  onChange={e => this.handleFormChange(e, "inventory")}
                  required
                />
                <span className="material-input" />
              </div>
              <div className={isEmptyHelper("form-group label-floating col-md-12", this.state.formFields.photo1)}>
                <label className="control-label">Photo 1</label>
                <input
                  type="url"
                  name="photo1"
                  className="form-control"
                  value={this.state.formFields.photo1}
                  onChange={e => this.handleFormChange(e, "photo1")}
                  required
                />
                <span className="material-input" />
              </div>
              <div className={isEmptyHelper("form-group label-floating col-md-12", this.state.formFields.photo2)}>
                <label className="control-label">Photo 2</label>
                <input type="url" name="photo2" className="form-control" 
                  value={this.state.formFields.photo2}
                  onChange={e => this.handleFormChange(e, "photo2")} />
                <span className="material-input" />
              </div>
              <div className={isEmptyHelper("form-group label-floating col-md-12", this.state.formFields.photo3)}>
                <label className="control-label">Photo 3</label>
                <input type="url" name="photo3" className="form-control" 
                  value={this.state.formFields.photo3}
                  onChange={e => this.handleFormChange(e, "photo3")}/>
                <span className="material-input" />
              </div>
              <div className={isEmptyHelper("form-group label-floating col-md-12", this.state.formFields.photo4)}>
                <label className="control-label">Photo 4</label>
                <input type="url" name="photo4" className="form-control" 
                  value={this.state.formFields.photo4}
                  onChange={e => this.handleFormChange(e, "photo4")}/>
                <span className="material-input" />
              </div>
              <div className={isEmptyHelper("form-group label-floating col-md-12", this.state.tags.length)}>
                <label className="control-label">Tags</label>
                <ReactTags
                  classNames={{
                    tags: 'bootstrap-tagsinput',
                    tag: 'tag label label-primary'
                  }}
                  tags={tags}
                  suggestions={suggestions}
                  handleDelete={this.handleTagDelete}
                  handleAddition={this.handleTagAddition}
                />
                <span className="material-input" />
              </div>
              <div className={isEmptyHelper("form-group label-floating col-md-12", this.state.formFields.description)}>
                <label className="control-label">Description</label>
                <textarea
                  name="description"
                  className="form-control"
                  id="message"
                  minLength="100"
                  rows="6"
                  value={this.state.formFields.description}
                  onChange={e => this.handleFormChange(e, "description")}
                />
                <span className="material-input" />
              </div>

              <div className="submit text-center col-md-12">
                <input
                  type="submit"
                  className="btn btn-primary btn-raised btn-round"
                  disabled={!!this.state.formFields.id}
                  value="Add"
                />
                <div
                  className="btn btn-info btn-raised btn-round"
                  disabled={!this.state.formFields.id}
                  onClick={this.handleEdit}
                >Edit
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-5 col-md-offset-1">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="text-left">Name</th>
                    <th className="text-left">Breed</th>
                    <th className="text-left">Breeder</th>
                    <th className="text-left">Inv.</th>
                    <th className="text-left">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {products && products.map((prod, i) => makeRow(prod, i, this.setForm))}
                  <tr>
                    <td></td>
                    <td colSpan="2">
                      <button
                        type="button"
                        rel="tooltip"
                        className="btn btn-success"
                        data-original-title=""
                        title=""
                        onClick={() => this.setForm(emptyForm)}
                      >
                        Add New Product<i className="material-icons">add</i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/*</div>*/}
      </div>
    );
  }
}

const makeRow = (product, i, setForm) =>
  <tr key={product.name + i}>
    <td className="text-left">
      {product.name}
    </td>
    <td className="text-left">
      {product.breed}
    </td>
    <td className="text-left">
      {product.breeder}
    </td>
    <td className="text-left">
      {product.inventory}
    </td>
    <td className="td-actions text-right">
      <button
        type="button"
        rel="tooltip"
        className="btn btn-danger"
        data-original-title=""
        title=""
        onClick={() => setForm(product)}
      >
        <i className="material-icons">list</i>
      </button>
    </td>
  </tr>;

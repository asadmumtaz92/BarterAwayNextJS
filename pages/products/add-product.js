import { useState } from 'react'
import classes from './add-product.module.css'
import MyInput from '../../components/ui/MyInput'


const AddProduct = () => {

    const [title, setTitle] = useState(null)
    const [desc, setDesc] = useState(null)
    const [price, setPrice] = useState(null)
    const [image, setImage] = useState(null)

    const titleHandler = (event) => {
        setTitle(event?.target?.value)
    }
    const descHandler = (event) => {
        setDesc(event?.target?.value)
    }
    const priceHandler = (event) => {
        setPrice(event?.target?.value)
    }
    const imageHandler = (event) => {
        setImage(event?.target?.value)
    }

    const addNewProductHandler = (event) => {
        event.preventDefault()
        if (!disabled) {
            const data = {
                title: title,
                desc: desc,
                price: price,
                image: image,
            }
            console.log('Final Data=', data)
        }
        else {
            alert('Please fill all input fields.')
        }
    }
    let disabled = (!title || !image || !price || !desc) ? true : false


    return (
        <section>
            <h1 className={`heading`}>Add new product</h1>

            <div className={`${classes.formBox}`}>
                <form className={classes.form} onSubmit={addNewProductHandler} method='POST'>

                    <MyInput
                        label='Product Title'
                        type='text'
                        value={title}
                        onChangeHandler={titleHandler}
                    />

                    <div className={classes.control} style={{marginBottom:20}}>
                        <label htmlFor='description'>Description:</label>
                        <textarea
                            rows='3'
                            value={desc}
                            onChange={descHandler}
                        ></textarea>
                    </div>
                    <MyInput
                        label='Product Price'
                        type='number'
                        value={price}
                        onChangeHandler={priceHandler}
                    />

                    <div>
                        <MyInput
                            label='Product Image'
                            type='text'
                            value={image}
                            onChangeHandler={imageHandler}
                        />
                        {image && <img src={image} alt="product image" style={{width: 100, height:100, borderRadius:5}} />}
                    </div>
                    {/* <div className={classes.control}>
                        <label htmlFor='title'>Meetup Title</label>
                        <input type='text' val={title} />
                    </div> */}
                    {/* <div className={classes.control}>
                        <label htmlFor='image'>Meetup Image</label>
                        <input type='file' id='image' value={image} />
                    </div> */}
                    <div className={classes.actions}>
                        <button>Add Product</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AddProduct

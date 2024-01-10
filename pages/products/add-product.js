import { useState } from 'react'
import classes from './add-product.module.css'
import { useRouter } from 'next/router'
import MyInput from '../../components/ui/MyInput'
import Head from 'next/head'


const AddProduct = () => {


    const router = useRouter();
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

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

    const addNewProductHandler = async (event) => {
        event.preventDefault();
        setLoading(true)

        if (!disabled) {
            try {
                const data = {
                    title: title,
                    desc: desc,
                    price: price,
                    image: image,
                };
                const response = await fetch(`/api/productHandler`, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' }
                });

                const finalData = await response.json();
                if (finalData?.status) {
                    router.push('/products/');
                    setLoading(false)
                    console.log(finalData?.message);
                }
            }
            catch (e) {
                console.log('e = ', e);
            }
        }
        else {
            alert('Please fill all input fields.')
        }
    }
    let disabled = (!title || !image || !price || !desc) ? true : false


    return (
        <section className={`col-6 h-screen`}>
            <Head>
                <title>Add Products</title>
                <meta name='description' content='Barter Away exchange your products.' />
            </Head>
            <h1 className={`heading`}>Add New Product</h1>

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
                            style={{backgroundColor: 'rgba(211, 211, 211, 0.534)'}}
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
                            placeholder={'Enter image url'}
                        />
                        {image && <img src={image} alt="product image" style={{width: 100, height:100, borderRadius:5}} />}
                    </div>

                    {loading ?
                        <div style={{textAlign: 'center', display:'flex',justifyContent:'center', alignItems:'center'}}>
                            <img src='https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif' style={{height: 25, width: 25, marginRight: 10}}/><span>{'Loading...'}</span>
                        </div>
                        : <div className={classes.actions}>
                            <button>Add Product</button>
                        </div>
                    }
                </form>
            </div>
        </section>
    )
}

export default AddProduct

import { useNavigate } from "react-router-dom";
import { notify } from "../../utils/functions";
import { useChangeStore } from "../../zustand/useChangeStore";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export default function NewMeetupForm() {

  const { flag,triggerChange } = useChangeStore()

  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is a required field"),
    image: Yup.string()
    .url("Invalid URL format")
    .required("Image is a required field"),
    address: Yup.string().required("Address is a required field"),
    description: Yup.string()
    .min(10, 'Description is too short')
    .required("Description is a required field"),
  })

  function submitHandler(values) {
    let meetups = JSON.parse(localStorage.getItem("meetups") || '[]')
    localStorage.setItem("meetups", JSON.stringify([...meetups,{id:meetups.length + 1,...values}]))
    triggerChange(!flag)
    notify(1,"Meetup added succesfully")
    navigate("/meetups")
  }

  return (
    <Card>
      <Formik
      initialValues={{
        title : "",
        image : "",
        address : "",
        description : ""
      }}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
      >
        {({ errors, touched }) => (
         <Form className={classes.form}>
           <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <Field type="text" name={"title"}  id="title" />
          </div>
           {errors.title && touched.title ? (
             <div style={{fontSize:'10px',color:'red'}}>{errors.title}</div>
           ) : null}
           <div className={classes.control}>
            <label htmlFor="image">Meetup Image</label>
            <Field type="text" name={"image"}  id="image" />
          </div>
           {errors.image && touched.image ? (
             <div style={{fontSize:'10px',color:'red'}}>{errors.image}</div>
           ) : null}
           <div className={classes.control}>
            <label htmlFor="address">Address</label>
            <Field type="text" name={"address"}  id="address" />
          </div>
           {errors.address && touched.address ? <div style={{fontSize:'10px',color:'red'}}>{errors.address}</div> : null}
           <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <Field as="textarea" name={"description"} id="description"  rows="5"></Field>
          </div>
           {errors.description && touched.description ? <div style={{fontSize:'10px',color:'red'}}>{errors.description}</div> : null}
           <div className={classes.actions}>
            <button type="submit">Add Meetup</button>
          </div>
         </Form>
       )}
     </Formik>
      {/*<form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
           </form>*/}
    </Card>
  );
}

import {Formik, Field, Form, FormikHelpers} from 'formik'
interface Values {
    companyName: string;
    jobTitle: string;
}

const JobForm = () => {
    <div>
      <Formik
        initialValues={{
          companyName: '',
          jobTitle: '',
        }}
        onSubmit={(values:Values, {setSubmitting}: FormikHelpers<Values>) => {
            //dispatch action
            setSubmitting(false)
        }}
      >
        <Form>
          <label htmlFor="companyName">Company</label>
          <Field id="companyName" name="companyName" />

          <label htmlFor="jobTitle">Last Name</label>
          <Field id="jobTitle" name="jobTitle" />

          
          <button type="submit">Save</button>
        </Form>
      </Formik>
    </div>
}
export default JobForm
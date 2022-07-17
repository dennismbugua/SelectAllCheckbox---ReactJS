import React from "react";
import { useForm } from "react-hook-form";

const SelectAllApp = () => {
    // handle events 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // handle submit 
    const onSubmit = data => alert(JSON.stringify(data));

    const selectAll = watch('selectAll')
    console.log('selectAll', selectAll);
  return (
    <React.Fragment>
      <section>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white w-auto h-auto pb-10 mt-16 mx-5 rounded-lg sm:w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:mx-auto">
            {/* header section */}
            <div className="h-24 flex justify-center items-center shadow">
              <p className="uppercase font-bold text-4xl text-center">
                favorite color
              </p>
            </div>

            {/* body section */}
            <div>
              <div className="mt-10 mx-10 space-y-6  ">
                <div className="flex space-x-4 items-center ">
                  <input 
                  type="checkbox"
                  value='all'
                   className="w-16 h-16"
                   {...register("selectAll")}
                    />
                  <p className="text-4xl">Select all</p>
                </div>

                <div className="grid justify-center space-y-5">
                  {/* red section */}
                  <div className="flex space-x-4 items-center ">
                    <input
                     type="checkbox"
                     value='red'
                      className="w-16 h-16"
                      checked={selectAll}
                      {...register("color", { required: {
                        value:true, 
                        message:'Color is required'
                    }
                  })}
                       />
                    <p className="text-4xl">red</p>
                  </div>

                  {/* yellow section */}
                  <div className="flex space-x-4 items-center ">
                    <input
                     type="checkbox" 
                     value='yellow'
                     className="w-16 h-16"
                     checked={selectAll}
                     {...register("color", { required: {
                        value:true, 
                        message:'Color is required'
                    }
                  })}
                      />
                    <p className="text-4xl">yellow</p>
                  </div>

                  {/* blue section */}
                  <div className="flex space-x-4 items-center ">
                    <input 
                    type="checkbox" 
                    value='blue'
                    className="w-16 h-16"
                    checked={selectAll}
                    {...register("color", { required: {
                        value:true, 
                        message:'Color is required'
                    }
                  })}
                     />
                    <p className="text-4xl">Select all</p>
                  </div>

                  {/* green section */}
                  <div className="flex space-x-4 items-center ">
                    <input
                     type="checkbox"
                     value='green'
                      className="w-16 h-16"
                      checked={selectAll}
                      {...register("color", { required: {
                        value:true, 
                        message:'Color is required'
                    }
                  })}
                       />
                    <p className="text-4xl">Select all</p>
                  </div>
                  <div>
                  {errors.color && <span className='text-red-500'>{errors.color.message}</span>}
                  </div>
                </div>
             
              </div>

              {/* submit section */}
              <div className="flex justify-center items-center mt-10">
                <input
                  type="submit"
                  value="Submit"
                  className="w-2/4 h-14 bg-blue-600 text-white font-bold rounded-lg text-4xl"
                />
              </div>
            </div>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default SelectAllApp;

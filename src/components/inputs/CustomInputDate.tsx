import { forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';

interface DateInputProps {
  name: string;
  label: string;
}

const DateInput = forwardRef<HTMLInputElement, DateInputProps>(({ name, label }, ref) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="relative mb-6">
      <input
        id={name}
        type="date"
        {...register(name)}
        className={`peer h-10 w-full border-b-2 bg-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-btn-blue ${errors[name] ? 'border-red-500 focus:border-red-500' : 'border-gray-300'}`}
      />
      {errors[name]?.message !== null && (
        <label htmlFor={name} className="block text-red-500 text-sm mb-1">
          {String(errors[name]?.message)}
        </label>
      )}
      <label
        htmlFor={name}
        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
      >
        {label}
      </label>
    </div>
  );
});

export default DateInput;

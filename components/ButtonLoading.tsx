import ReactLoading from 'react-loading';

interface ButtonLoadingProps {
  loading: boolean;
  text: string;
  type: 'button' | 'submit';
  onClick?: () => {};
}

const ButtonLoading = ({ loading, text, type = 'submit', onClick }: ButtonLoadingProps) => {
  return (
    <button type={type} className='button-primary' onClick={onClick}>
      {loading ? (
        <div className='flex w-full justify-center'>
          <ReactLoading type='spin' color='#fff' height={30} width={30} />
        </div>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
};

export { ButtonLoading };

import React from 'react';

export interface SpinnerProps {
  type?: 'primary' | 'secondary'; // Optional prop to define spinner type
}

export const Spinner = ({ type = 'primary' }: SpinnerProps) => {
  return (
    <div className="flex justify-center items-center">
      {type === 'secondary' ? (
        // Secondary Spinner
        <div className="animate-spin rounded-full border-t-2 border-b-2 border-solid border-orange-500 flex justify-center items-center p-4">
          <svg className="animate-spin h-2 w-2 bg-orange-400" viewBox="0 0 24 24" />
        </div>
      ) : (
        // Primary Spinner
        <div className="w-12 h-12 rounded-full animate-spin border-[6px] border-orange-500 border-b-transparent" />
      )}
    </div>
  );
};

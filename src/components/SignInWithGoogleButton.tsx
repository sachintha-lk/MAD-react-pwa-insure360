import React, { useContext } from "react";
import { signInWithGoogle } from "../firebase";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
import { User } from "firebase/auth";

async function handleSignInWithGoogle(
  user: User | undefined,
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>
) {
  try {
    setUser(await signInWithGoogle());

    if (user) {
      return <Navigate to="/dashboard" replace />;
    }
  } catch (error) {
    console.log("error", error);
  }
}

function SignInWithGoogleButton() {
  const { user, setUser } = useContext(AuthContext)!;

  return (
    <button
      onClick={() => {
        handleSignInWithGoogle(user, setUser);
      }}
      className="relative flex w-96 items-center justify-center rounded-lg border-2 border-gray-600 px-3 py-2 font-medium hover:bg-slate-100 md:px-4 md:py-3"
    >
      <span className="absolute left-4 top-1/2 -translate-y-1/2 transform">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#EA4335 "
            d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
          />
          <path
            fill="#34A853"
            d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
          />
          <path
            fill="#4A90E2"
            d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
          />
          <path
            fill="#FBBC05"
            d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
          />
        </svg>
      </span>
      <span className="ml-8">Sign in with Google</span>
    </button>
  );
}

export default SignInWithGoogleButton;

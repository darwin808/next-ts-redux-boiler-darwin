import type { NextPage } from "next"
import Button from "components/Button"
import { tokenActions } from "redux/actions/auth"
import { useAppDispatch, useAppSelector } from "redux/hooks"
import { RootState } from "redux/store"

const Home: NextPage = () => {
   const token = useAppSelector((e: RootState) => e.token)
   const dispatch = useAppDispatch()
   return (
      <div className="bg-red-200 h-screen">
         <button onClick={() => dispatch(tokenActions.getAccessToken("wewewe123"))}>OK</button>
         <div>{JSON.stringify(token)}</div>
         <Button>OKOKOKOK</Button>
      </div>
   )
}

export default Home

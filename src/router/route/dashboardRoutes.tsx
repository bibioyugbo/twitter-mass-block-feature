import {RouteConstant} from "../../util/constant/RouteConstant.ts";
import {type RouteType} from "../../util/type/route.ts";
import PostView from "../../views/PostView.tsx";




export const dashboardRoutes: RouteType[] = [
    {
        path: RouteConstant.dashboard.post.path,
        name: RouteConstant.dashboard.post.name,
        element: <PostView />,
        metadata: { isProtected: false },
    },
    ]
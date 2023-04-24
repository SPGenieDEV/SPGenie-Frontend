import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Dashboard from "../components/Pages/Dashboard";
import Small from "../components/Pages/GPT/Small";
import UploadCSV from "../components/Pages/CSV/UploadCSV";
import Medium from "../components/Pages/GPT/Medium";
import Large from "../components/Pages/GPT/Large";
import Traditional from "../components/Pages/Common/Traditional";
import DeepSE from "../components/Pages/Common/DeepSE";
import RNNCNN from "../components/Pages/Common/RNNCNN";

const CoreRoutes = () => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={path} exact>
                <Dashboard />
            </Route>


            <Route path={`${path}/model/traditional`} exact>
                <Traditional />
            </Route>

            <Route path={`${path}/model/deepse`} exact>
                <DeepSE />
            </Route>

            <Route path={`${path}/model/rnncnn`} exact>
                <RNNCNN />
            </Route>


            <Route path={`${path}/gpt/GPT2small`} exact>
                <Small />
            </Route>

            <Route path={`${path}/gpt/GPT2medium`} exact>
                <Medium />
            </Route>

            <Route path={`${path}/gpt/GPT2large`} exact>
                <Large />
            </Route>

            <Route path={`${path}/bulkprediction`} exact>
                <UploadCSV />
            </Route>
        </Switch>

    );
};

export default CoreRoutes;

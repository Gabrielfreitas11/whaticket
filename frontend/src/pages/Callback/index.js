import React, { useContext, useEffect } from "react";
import MainContainer from "../../components/MainContainer";
import MainHeader from "../../components/MainHeader";
import Title from "../../components/Title";

import { Redirect } from "react-router-dom";

import { useQuery } from "../../hooks/useQuery";

import { CallbackContainer } from "./styles";

import { apiWhatsApp } from "../../services/api";
import { i18n } from "../../translate/i18n";

import { AuthContext } from "../../context/Auth/AuthContext";

export default function Callback() {
  const query = useQuery();

  const { user } = useContext(AuthContext);
  const code = query.get("code");

  useEffect(() => {
    if (code)
      apiWhatsApp.post("/saveNewClient", {
        email: user.email,
        code
      });
  }, []);

  return (
    <MainContainer>
      <MainHeader>
        <Title>{i18n.t("marketplace.title")}</Title>
      </MainHeader>
      <CallbackContainer>
        {!code && <Redirect to={{ pathname: "/" }} />}
        {code && <span>Mercado Livre Configurado com sucesso!!</span>}
      </CallbackContainer>
    </MainContainer>
  );
}

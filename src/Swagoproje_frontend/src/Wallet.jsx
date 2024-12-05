import React from "react";
import { createClient } from "@connect2ic/core";
import { defaultProviders } from "@connect2ic/core/providers";
import { Connect2ICProvider, ConnectButton, ConnectDialog } from "@connect2ic/react";
import "@connect2ic/core/style.css";
import * as counter from "declarations/Swagoproje_backend";

const client = createClient({
  canisters: { counter },
  providers: defaultProviders,
});

const Wallet = ({ children }) => (
  <Connect2ICProvider client={client}>
    {children}
    <ConnectButton />
    <ConnectDialog />
  </Connect2ICProvider>
);

export default Wallet;



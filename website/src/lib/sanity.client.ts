import { createClient } from "@sanity/client";
import { config } from "./sanity.config";

export const sanityClient = createClient(config);

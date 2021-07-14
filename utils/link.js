import React from "react";
import { Linking} from "react-native";

export function openLink(url) {
    Linking.openURL(url)
}
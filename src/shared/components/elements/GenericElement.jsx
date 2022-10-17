import styled from "@emotion/styled";
export const GenericElement = styled("div")((props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    return ({
        marginLeft: (_c = (_b = (_a = props.ml) !== null && _a !== void 0 ? _a : props.mx) !== null && _b !== void 0 ? _b : props.m) !== null && _c !== void 0 ? _c : "",
        marginRight: (_f = (_e = (_d = props.mr) !== null && _d !== void 0 ? _d : props.mx) !== null && _e !== void 0 ? _e : props.m) !== null && _f !== void 0 ? _f : "",
        marginTop: (_j = (_h = (_g = props.mt) !== null && _g !== void 0 ? _g : props.my) !== null && _h !== void 0 ? _h : props.m) !== null && _j !== void 0 ? _j : "",
        marginBottom: (_m = (_l = (_k = props.mb) !== null && _k !== void 0 ? _k : props.my) !== null && _l !== void 0 ? _l : props.m) !== null && _m !== void 0 ? _m : "",
        textAlign: (_o = props.textAlign) !== null && _o !== void 0 ? _o : "",
        //! props.theme is a generic type that doesn't account for us adding fontSize etc
        //! we SHOULD create a Theme type and use that BUT this is a hack to avoid the extra
        //! Legwork for this singular example
        fontSize: props.heading ? props.theme.fontSize.heading : "",
    });
});
export class StringUtil {
    static isEmpty(value){
        return !value || !value.trim();
    }

    static capitalize(value){
        return value.charAt(0).toLocaleUpperCase();
    }
}

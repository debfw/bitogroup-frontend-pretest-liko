export function formatNumberToThousands(value:number) {
    return new Intl.NumberFormat().format(value);
  }
function estimateTransactionFee(amountToSend) {
  const calculatedFee = 0.015 * amountToSend;
  const transactionFee = Math.max(10, Math.min(70, calculatedFee));
  const totalDebited = amountToSend + transactionFee;

  console.log(`Sending KES ${amountToSend}:
Calculated Transaction Fee: KES ${transactionFee}
Total amount to be debited: KES ${totalDebited}

Send Money Securely!`);
}

const amount = Number(prompt("Unatuma Ngapi? (KES):"));
estimateTransactionFee(amount);

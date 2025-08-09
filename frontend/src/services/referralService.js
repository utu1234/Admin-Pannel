import API from './api';

// GET combined referral + wallet
export const fetchReferralWallet = async () => {
  const { data } = await API.get('/referral-wallet'); // backend combined endpoint
  return data;
}

// create a new referral (backend should accept this at /referral-wallet/referrals or /referrals)
export const createReferral = async (payload) => {
  // try combined endpoint create; fallback to /referrals
  try {
    const { data } = await API.post('/referral-wallet/referrals', payload);
    return data;
  } catch (err) {
    const { data } = await API.post('/referrals', payload);
    return data;
  }
}

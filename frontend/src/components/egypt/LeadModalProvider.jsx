import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import DesignEscapeModal from './DesignEscapeModal';

const Ctx = createContext({ openLead: () => {}, setPageLead: () => {} });

// Global "Design Your Escape" popup; pages register their destination via usePageLead().
export function LeadModalProvider({ children }) {
  const [page, setPage] = useState({ destination: '', image: '', imageAlt: '' });
  const [lead, setLead] = useState(null);
  const openLead = useCallback((opts) => setLead({ ...page, ...(opts || {}) }), [page]);
  const setPageLead = useCallback((p) => setPage(p || { destination: '', image: '', imageAlt: '' }), []);
  const value = useMemo(() => ({ openLead, setPageLead }), [openLead, setPageLead]);
  return (
    <Ctx.Provider value={value}>
      {children}
      <DesignEscapeModal open={!!lead} onClose={() => setLead(null)} destination={lead?.destination || ''} tripTitle={lead?.tripTitle || ''} image={lead?.image} imageAlt={lead?.imageAlt} />
    </Ctx.Provider>
  );
}

export const useLeadModal = () => useContext(Ctx);

export function usePageLead(destination, image, imageAlt) {
  const { setPageLead } = useLeadModal();
  useEffect(() => {
    setPageLead({ destination, image, imageAlt });
    return () => setPageLead(null);
  }, [destination, image, imageAlt, setPageLead]);
}

// Cards.tsx
import React from 'react';
import './StatusBadge.scss';

interface StatusBadgeProps {
    status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    let badgeClass = 'badge position-absolute my-1 mx-1 ';

    if(!status){
        return (<div>Error</div>)
    }

    switch (status.toLowerCase()) {
        case 'alive':
          badgeClass = badgeClass.concat('alive');  
          break;
        case 'dead':
          badgeClass = badgeClass.concat('dead');   
          break;
        case 'unknown':
          badgeClass = badgeClass.concat('unknown'); 
          break;
        default:
          break;
      }

    return (
        <span className={badgeClass}>{status.toUpperCase()}</span>
    );
};

export default StatusBadge;

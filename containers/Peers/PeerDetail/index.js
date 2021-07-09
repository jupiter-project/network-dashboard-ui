
import { memo } from 'react'

import CardWrapper from 'parts/CardWrapper'
import ValueItem from 'parts/ValueItem'
import { getDateFromTimestamp } from 'utils/helpers/getTimestamp'

const PeerDetail = ({
  peer
}) => {
  return (
    <CardWrapper title={`Peer: ${peer.platform}`} >
      <ValueItem
        label='Platform'
        value={peer.platform}
      />
      <ValueItem
        label='Address'
        value={peer.address}
      />
      <ValueItem
        label='Announced Address'
        value={peer.announcedAddress}
      />
      <ValueItem
        label='Share Address'
        value={peer.shareAddress ? 'True' : 'False'}
      />
      <ValueItem
        label='Api Port'
        value={peer.apiPort}
      />
      <ValueItem
        label='Application'
        value={peer.application}
      />
      <ValueItem
        label='Blockchain State'
        value={peer.blockchainState}
      />
      <ValueItem
        label='Weight'
        value={peer.weight}
      />
      <ValueItem
        label='Downloaded Volume'
        value={peer.downloadedVolume}
      />
      <ValueItem
        label='Uploaded Volume'
        value={peer.uploadedVolume}
      />
      <ValueItem
        label='Version'
        value={peer.version}
      />
      <ValueItem
        label='State'
        value={peer.state}
      />
      <ValueItem
        label='Inbound WebSocket'
        value={peer.inboundWebSocket ? 'True' : 'False'}
      />
      <ValueItem
        label='Outbound WebSocket'
        value={peer.outboundWebSocket ? 'True' : 'False'}
      />
      <ValueItem
        label='Inbound'
        value={peer.inbound ? 'True' : 'False'}
      />
      <ValueItem
        label='Last Updated'
        value={getDateFromTimestamp(peer.lastUpdated)}
      />
      <ValueItem
        label='Last Connect Attempt'
        value={getDateFromTimestamp(peer.lastConnectAttempt)}
      />
      <ValueItem
        label='Blacklisted'
        value={peer.blacklisted ? 'True' : 'False'}
      />
      <ValueItem
        label='Services'
        value={peer.services.join(', ')}
      />
    </CardWrapper>
  )
};

export default memo(PeerDetail);
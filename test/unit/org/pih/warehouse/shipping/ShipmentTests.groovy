package org.pih.warehouse.shipping

import grails.test.*
import org.pih.warehouse.core.*
import org.pih.warehouse.shipping.*

class ShipmentTests extends GrailsUnitTestCase {
    protected void setUp() {
        super.setUp()
		def depot = new LocationType(name: "Depot")
		mockDomain(LocationType, [depot])
		
    	Location loc1 = new Location ([id: "1", name: "Location 1", locationType: depot])
    	Location loc2 = new Location ([id: "2", name: "Location 2", locationType: depot])
		mockDomain(Location, [loc1, loc2])
		
		def shipmentType = new ShipmentType(name: "Sea")
		
		Shipment shipment = new Shipment([id: "1",
			name: "Test Shipment",
			shipmentType: shipmentType,
			expectedShippingDate: new Date(),
			expectedDeliveryDate: new Date() + 1,
			origin: loc1, 			
			destination: loc2])
		
		mockDomain(Shipment, [shipment])
		
		ReferenceNumberType refType1 = new ReferenceNumberType ([name: "Type 1", id: "1"])
		ReferenceNumberType refType2 = new ReferenceNumberType ([name: "Type 2", id: "2"])
		mockDomain(ReferenceNumberType, [refType1, refType2])
		
		//mockForConstraintsTests(Shipment, [ shipment ])
    }

    protected void tearDown() {
        super.tearDown()
    }

	
	void testGetShipment() { 
		def shipment = Shipment.get("1")
		assertNotNull shipment		
	}
	
    void testAddReferenceNumbersToShipment () {    	
		def refType1 = ReferenceNumberType.get("1")
		assertNotNull refType1
		
		def refType2 = ReferenceNumberType.get("2")
		assertNotNull refType2
		
    	ReferenceNumber ref1 = new ReferenceNumber ([id: "1", referenceNumberType: refType1, identifier: "1234"])
      	ReferenceNumber ref2 = new ReferenceNumber ([id: "2", referenceNumberType: refType2, identifier: "5678"])
    	ReferenceNumber ref3 = new ReferenceNumber ([id: "3", referenceNumberType: refType1, identifier: "9012"])
    	
		def shipment = Shipment.get("1")
		assertNotNull shipment
		
		// sanity check that we've defined the shipment correctly
		assertTrue shipment.validate()    	
		println shipment.errors		
		
    	// now make sure that we can add valid reference numbers
    	//shipment.referenceNumbers = []
    	shipment.addToReferenceNumbers(ref1)
    	shipment.addToReferenceNumbers(ref2)
    	assertTrue shipment.validate()
    	
    	// now make sure that we can't add another reference number of the same type
    	shipment.addToReferenceNumbers(ref3)
    	assertFalse shipment.validate()	
		
    }
}
package modules.product.domain;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import javax.xml.bind.annotation.XmlType;
import org.skyve.CORE;
import org.skyve.domain.messages.DomainException;
import org.skyve.impl.domain.AbstractPersistentBean;

/**
 * Product
 * 
 * @stereotype "persistent"
 */
@XmlType
@XmlRootElement
public class Product extends AbstractPersistentBean {
	/**
	 * For Serialization
	 * @hidden
	 */
	private static final long serialVersionUID = 1L;

	/** @hidden */
	public static final String MODULE_NAME = "product";
	/** @hidden */
	public static final String DOCUMENT_NAME = "Product";

	/** @hidden */
	public static final String namePropertyName = "name";
	/** @hidden */
	public static final String pricePropertyName = "price";

	/**
	 * Name
	 **/
	private String name;
	/**
	 * Price
	 **/
	private String price;

	@Override
	@XmlTransient
	public String getBizModule() {
		return Product.MODULE_NAME;
	}

	@Override
	@XmlTransient
	public String getBizDocument() {
		return Product.DOCUMENT_NAME;
	}

	public static Product newInstance() {
		try {
			return CORE.getUser().getCustomer().getModule(MODULE_NAME).getDocument(CORE.getUser().getCustomer(), DOCUMENT_NAME).newInstance(CORE.getUser());
		}
		catch (RuntimeException e) {
			throw e;
		}
		catch (Exception e) {
			throw new DomainException(e);
		}
	}

	@Override
	@XmlTransient
	public String getBizKey() {
		try {
			return org.skyve.util.Binder.formatMessage("{name}", this);
		}
		catch (@SuppressWarnings("unused") Exception e) {
			return "Unknown";
		}
	}

	@Override
	public boolean equals(Object o) {
		return ((o instanceof Product) && 
					this.getBizId().equals(((Product) o).getBizId()));
	}

	/**
	 * {@link #name} accessor.
	 * @return	The value.
	 **/
	public String getName() {
		return name;
	}

	/**
	 * {@link #name} mutator.
	 * @param name	The new value.
	 **/
	@XmlElement
	public void setName(String name) {
		preset(namePropertyName, name);
		this.name = name;
	}

	/**
	 * {@link #price} accessor.
	 * @return	The value.
	 **/
	public String getPrice() {
		return price;
	}

	/**
	 * {@link #price} mutator.
	 * @param price	The new value.
	 **/
	@XmlElement
	public void setPrice(String price) {
		preset(pricePropertyName, price);
		this.price = price;
	}
}
